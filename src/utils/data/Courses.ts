import { Course } from "../interfaces/CourseInter";

import frame1 from "../../assets/Frame 70.png";
import frame2 from "../../assets/Frame 70 (1).png";
import frame3 from "../../assets/Frame 70 (2).png";

export const courses: Course[] = [
    {
      id: 1,
      name: "Как пройти собеседование",
      instructor: "Гаухар Кайратовна",
      category: "Поведение",
      path: frame1,
    },
    {
      id: 2,
      name: "Психология",
      instructor: "Римма Мустафина",
      category: "Психология",
      path: frame2,
    },
    {
      id: 3,
      name: "Здоровье",
      instructor: "Галия Канатовна",
      category: "Здоровье",
      path: frame3,
    },
  ];