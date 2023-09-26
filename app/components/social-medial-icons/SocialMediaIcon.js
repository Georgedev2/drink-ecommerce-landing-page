import Image from 'next/image';

const SocialMediaIcon = (props) => {
  const { data } = props;
  return (
    <div>
      <a href={data.link}>
        <Image
          width={35}
          height={35}
          src={data.linkImage}
          alt={data.imageName}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
