const getData = async () => {
  await new Promise(
    (res) => setTimeout( () => res(), 2000 )
  );
  return { data: [ 1, 2, 3 ] };
}

const MyPage = async () => {
  const data = await getData();
  console.log( data );
  return <div>{ JSON.stringify(data) }</div>;
}
export default MyPage;

// clients must use hooks if you want to do things
// the hooks way means the page is rendered but waiting for data
// on the server, data comes fast.
