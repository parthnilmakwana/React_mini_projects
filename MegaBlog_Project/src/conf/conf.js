const conf= {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL).replace(/['"]/g, '').trim(),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID).replace(/['"]/g, '').trim(),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID).replace(/['"]/g, '').trim(),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID).replace(/['"]/g, '').trim(),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID).replace(/['"]/g, '').trim(),
}

export default conf;