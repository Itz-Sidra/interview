export async function uploadToS3(file) {
  // TODO: integrate AWS SDK
  return `mock-s3/${Date.now()}-${file.name}`;
}
