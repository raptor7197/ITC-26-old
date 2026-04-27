CORS redeploy note

After updating cors.json, redeploy it to Cloud Storage using this command:

gsutil cors set cors.json gs://YOUR_BUCKET_NAME
