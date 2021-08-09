const Image = ({ url }) => {
  url = `${url}&random=${Math.floor(Math.random() * 100000)}`;
  return <img src={url} alt="pictures" width="150" height="100" />;
};

export default Image;
