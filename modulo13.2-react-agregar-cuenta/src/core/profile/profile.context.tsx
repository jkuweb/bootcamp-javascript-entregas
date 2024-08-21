import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ProfileContext {
  userName: string;
  setUserProfile: (userProfile: string) => void;
}

const noUserLogin = "no user login";
const ProfileContext = createContext<ProfileContext>({
  userName: noUserLogin,
  setUserProfile: () => {},
});

export const ProfileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<string>("");

  return (
    <ProfileContext.Provider
      value={{
        userName: userProfile,
        setUserProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
