import Image from 'next/image';
import React from 'react';

const SocialMediaIcon = (props) => {
  const { data } = props;
  console.log(data);
  const imgSize = {
    marginRight: '10px',
    cursor: 'pointer',
  };

  return (
    <div>
      <a href={data.link}>
        <Image
          width={35}
          height={35}
          src={data.linkImage}
          alt={data.imageName}
          style={imgSize}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
