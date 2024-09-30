import Image from "next/image";

const ProfileImageGrid = () => {

  const styles = {
    placeholder: {
      width: "400px",
      height: "400px",
      marginTop: "30px",
          },

  };

  return (
    <div className="placeholder" style={styles.placeholder}>
      <Image
        alt="Profile Image"
        height={600}
        src="/images/imagemomo.png"
        width={600}
      />
    </div>
  );
};

export default ProfileImageGrid;
