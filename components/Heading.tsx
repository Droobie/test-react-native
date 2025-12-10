import { ReactNode } from "react";
import { Platform, Text } from "react-native";

type HeadingProps = {
  level?: 1 | 2 | 3;
  children: ReactNode;
  style?: any;
};

export default function Heading({ level = 1, children, style }: HeadingProps) {
  if (Platform.OS === "web") {
    const Tag = `h${level}` as any;
    return <Tag style={style}>{children}</Tag>;
  }

  return (
    <Text
      style={[{ fontWeight: "bold", fontSize: level === 1 ? 32 : 24 }, style]}
    >
      {children}
    </Text>
  );
}
