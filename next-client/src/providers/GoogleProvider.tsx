import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_AUTH_KEY ?? "no auth"}>
      {children}
    </GoogleOAuthProvider>
  );
}
