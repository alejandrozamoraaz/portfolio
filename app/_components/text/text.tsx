import style from './text.module.css'

interface TextProps {
  text: string;
  type?: "headline" | "title" | "bodyLarge" | "bodySmall";
  weight?: 300 | 400 | 600 | 900;
  classText?: string;
}

export default function Text({
  text,
  type,
  weight,
  classText = '',
}: TextProps) {
  const textType = (() => {
    switch (type) {
      case "headline":
        return style.headline;
      case "title":
        return style.title;
      case "bodyLarge":
        return style.bodyLarge;
      case "bodySmall":
        return style.bodySmall;
      default:
        return style.body;
    }
  })();

  const textStyle = {
    fontWeight: weight?.toString(),
  };

  switch (type) {
    case "headline":
      return <h1 style={textStyle} className={`${textType} ${classText}`}>{text}</h1>;
    case "title":
      return <h2 style={textStyle} className={`${textType} ${classText}`}>{text}</h2>;
    case "bodyLarge":
      return <h4 style={textStyle} className={`${textType} ${classText}`}>{text}</h4>;
    case "bodySmall":
      return <small style={textStyle} className={`${textType} ${classText}`}>{text}</small>;
    default:
      return <p style={textStyle} className={`${textType} ${classText}`}>{text}</p>;
  }
}
