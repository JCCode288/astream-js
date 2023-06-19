import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider
      clientId={
        "546786885789-31t00nrvsdhb05h45juu204df043839j.apps.googleusercontent.com"
      }
    >
      {children}
    </GoogleOAuthProvider>
  );
}
