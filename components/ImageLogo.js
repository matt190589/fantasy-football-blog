import Image from "next/image";

const ImageLogo = () => {
  return (
    <Image
      src="/images/profile_logo.png"
      height={144}
      width={144}
      alt="Fantasy Football Tipster logo"
    ></Image>
  );
};
export default ImageLogo;