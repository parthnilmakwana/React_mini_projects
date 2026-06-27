import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "./index";
import { useNavigate } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [submitError, setSubmitError] = useState("");

  const submit = async (data) => {
    setSubmitError("");
    try {
      // Get the native File object directly from the DOM to bypass any potential react-hook-form wrapper issues
      const imageInput = document.getElementById("image-upload");
      const actualFile = imageInput?.files?.length > 0 ? imageInput.files[0] : null;

      if (post) {
        const file = actualFile
          ? await appwriteService.uploadFile(actualFile)
          : null;
        if (file) {
          appwriteService.deleteFile(post.featuredImage);
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        if (!actualFile) {
          setSubmitError("Please select a valid image file.");
          return;
        }
        
        console.log("Uploading native file object to Appwrite:", actualFile);
        const file = await appwriteService.uploadFile(actualFile);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(error.message || "An error occurred during submission.");
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      {submitError && (
        <div className="w-full mb-4 text-red-600 text-center bg-red-100 p-2 rounded">
          {submitError}
        </div>
      )}
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-1"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="text-red-500 text-sm mb-4">{errors.title.message}</p>}
        
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-1"
          {...register("slug", { required: "Slug is required" })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {errors.slug && <p className="text-red-500 text-sm mb-4">{errors.slug.message}</p>}
        
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          id="image-upload"
          className="mb-1"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post ? "Featured image is required" : false })}
        />
        {errors.image && <p className="text-red-500 text-sm mb-4">{errors.image.message}</p>}
        
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-1"
          {...register("status", { required: "Status is required" })}
        />
        {errors.status && <p className="text-red-500 text-sm mb-4">{errors.status.message}</p>}
        
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full mt-4"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
