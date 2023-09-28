export default function LoginComponent() {
  return (
    <div>
      <button
        className="btn btn-accent"
        onClick={() => {
          let windowRef: any = window;
          let loginModal = windowRef.login_modal;

          return loginModal.showModal();
        }}
      >
        Login
      </button>
    </div>
  );
}
