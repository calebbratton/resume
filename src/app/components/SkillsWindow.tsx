import WindowComponent from "./WindowComponent";

const SkillsWindow = () => {
  return (
    <WindowComponent title="Resume">
      {[
        "JavaScript",
        "TypeScript",
        "React",
        "HTML5",
        "CSS",
        "Go",
        "PostgreSQL",
        "MongoDB",
        "Unit/Integration Testing",
        "Java",
        "Springboot",
        "React Native",
        "AWS",
        "CI/CD tools",
        "Docker",
        "Redis",
        "Kafka",
      ].map((item) => (
        <li key={item}>{item}</li>
      ))}
    </WindowComponent>
  );
};

export default SkillsWindow;
