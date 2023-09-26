const fetchData = async () => {
  const delay = (delay) => {
   return new Promise((resolve) => setTimeout(resolve, delay));
  };
  // 
  const data = await delay(3000);// delay foe 3s and the return our json data stored locally as array
  return data 
};

const page = async () => {
  let users = await fetchData();
  return <div>page</div>;
};

export default page;
