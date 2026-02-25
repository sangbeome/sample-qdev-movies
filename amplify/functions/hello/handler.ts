export const handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Amplify Gen2 Lambda!' }),
  };
};
