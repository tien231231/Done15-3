import "./AccountAvatar.css";
import background from "../../assets/images/background.png";
import userAvatar from "../../assets/images/naruto.webp";

const AccountAvatar = () => {
  const user = {
    userName: "Naruto",
    email: "naruto@gmail.com",
    userAvatar: userAvatar,
  };
  return (
    <div className="AccountAvatar">
      <img src={background} alt="background" className="background"></img>
      <div className="upload">
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7879 5.58133L14.7879 5.58133C14.3533 5.25908 13.8188 5.02222 13.2542 4.89442C13.1567 4.87248 13.0674 4.82326 12.9969 4.7525C12.9263 4.68173 12.8773 4.59235 12.8556 4.49478M14.7879 5.58133L3.75777 3.16123C3.75776 3.16125 3.75775 3.16127 3.75774 3.16129M14.7879 5.58133C15.566 6.15776 15.9766 6.9531 15.9766 7.88094C15.9766 8.83754 15.5955 9.63993 14.8747 10.2009C14.2377 10.6961 13.3503 10.97 12.375 10.97H8.52344V6.25719L9.63062 7.36377C9.67939 7.4125 9.7373 7.45112 9.80103 7.47741C9.86477 7.5037 9.93307 7.51714 10.002 7.51696C10.071 7.51678 10.1392 7.50298 10.2028 7.47635C10.2664 7.44972 10.3241 7.4108 10.3726 7.36181C10.5776 7.15482 10.565 6.81785 10.3603 6.61282L10.3603 6.6128L8.37001 4.62342L8.35344 4.64L8.37 4.62342C8.27185 4.52533 8.13876 4.47023 8 4.47023C7.86124 4.47023 7.72815 4.52533 7.63 4.62342L7.62999 4.62343L5.63968 6.61343C5.44114 6.81197 5.4221 7.13651 5.61236 7.34547C5.65998 7.39793 5.71776 7.44017 5.7822 7.46964C5.84664 7.49911 5.9164 7.51519 5.98725 7.5169C6.05809 7.51862 6.12855 7.50593 6.19434 7.4796C6.26013 7.45328 6.3199 7.41387 6.37001 7.36376L7.47656 6.25721V10.97H4.25C3.12162 10.97 2.07034 10.5982 1.29 9.92445C0.473229 9.2176 0.0234375 8.2403 0.0234375 7.16844C0.0234375 6.10795 0.441194 5.17968 1.23175 4.48102C1.80454 3.97625 2.55534 3.61945 3.38776 3.45141C3.4678 3.43525 3.54294 3.40059 3.60718 3.35021C3.67141 3.29984 3.72297 3.23514 3.75774 3.16129M14.7879 5.58133L3.75774 3.16129M12.8556 4.49478L12.8784 4.48969L12.8556 4.49482C12.8556 4.49481 12.8556 4.49479 12.8556 4.49478ZM12.8556 4.49478C12.6128 3.41318 12.0904 2.48631 11.3229 1.78417L11.3229 1.78416C10.4308 0.966702 9.25092 0.516876 8 0.516876C6.90032 0.516876 5.88522 0.861505 5.06553 1.51335M5.06553 1.51335C5.06553 1.51334 5.06553 1.51334 5.06554 1.51333L5.05095 1.49502L5.06553 1.51335ZM5.06553 1.51335C4.50983 1.95595 4.06254 2.51959 3.75774 3.16129M7.52344 11.0169H8.47656V13.0066C8.47656 13.133 8.42635 13.2542 8.33698 13.3435C8.24761 13.4329 8.12639 13.4831 8 13.4831C7.87361 13.4831 7.75239 13.4329 7.66302 13.3435C7.57365 13.2542 7.52344 13.133 7.52344 13.0066V11.0169Z"
            fill="black"
            stroke="#112211"
            strokeWidth="0.046875"
          />
        </svg>
        <span>Upload new cover</span>
      </div>
      <div className="user-avatar">
        <img
          src={user.userAvatar}
          className="userAvatar"
          alt="userAvatar"
        ></img>
        <div className="edit-avatar">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3103 4.06L2.55422 16.8475L1.78125 18.7187L3.6525 17.9458L16.44 5.18968L15.3103 4.06ZM17.8627 1.50812L17.31 2.06031L18.4397 3.19L18.9923 2.63734C19.1374 2.49222 19.2188 2.29546 19.2188 2.09031C19.2188 1.88516 19.1374 1.6884 18.9923 1.54328L18.9572 1.50812C18.8853 1.43625 18.8 1.37923 18.7061 1.34034C18.6122 1.30144 18.5116 1.28142 18.4099 1.28142C18.3083 1.28142 18.2076 1.30144 18.1137 1.34034C18.0198 1.37923 17.9345 1.43625 17.8627 1.50812Z"
              stroke="black"
              strokeWidth="2.0625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="user-info">
          <h3 style={{ marginBottom: "0", marginTop: "10px" }}>
            {user.userName}
          </h3>
          <p style={{ margin: "4px" }}>{user.email}</p>
        </div>
      </div>
    </div>
  );
};
export default AccountAvatar;
