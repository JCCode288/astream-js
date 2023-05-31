export default function ButtonCTA({ title, actions, shadow }: any) {
  switch (shadow) {
    case "small":
      shadow = "shadow-sm";
      break;
    case "medium":
      shadow = "shadow-md";
      break;
    case "large":
      shadow = "shadow-lg";
      break;
    case "extra":
      shadow = "shadow-xl";
      break;
    default:
      shadow = "shadow-none";
  }

  return (
    <button
      onClick={actions}
      className={"btn btn-accent btn-outline rounded-md " + shadow}
    >
      {title}
    </button>
  );
}
