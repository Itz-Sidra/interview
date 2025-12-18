export async function uploadToS3(file) {
  // TODO: integrate AWS SDK
  const mockKey = `mock-s3/${Date.now()}-${file.originalname || file.name}`;
  return {
    Key: mockKey,      
    Location: mockKey  
  };
}