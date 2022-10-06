import SocialLinks from "./SocialLinks";

const KeepInTouch = () => {
  return (
    <div className="p-4 py-20 md:py-32 text-center">
      <h3 className="text-5xl">Keep in touch</h3>
      <p className="text-lg p-6">Feel free to connect with me</p>
      <div className="flex justify-center gap-4 text-pink-600">
        <SocialLinks />
      </div>
    </div>
  );
};

export default KeepInTouch;
