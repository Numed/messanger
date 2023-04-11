import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CircleSkeleton = () => {
  return (
    <Skeleton
      circle
      height={30}
      width={30}
      duration={2}
      containerClassName="avatar-skeleton"
      baseColor={
        localStorage.getItem("dark-mode") === "dark" ? "#bdbcbc" : "#ebebeb"
      }
      highlightColor={
        localStorage.getItem("dark-mode") === "dark" ? "#ffffff" : "#9e9e9e"
      }
    />
  );
};
export const ListSkeleton = () => {
  return (
    <Skeleton
      count={6}
      containerClassName="list-skeleton"
      width={330}
      height={80}
      baseColor={
        localStorage.getItem("dark-mode") === "dark" ? "#bdbcbc" : "#ebebeb"
      }
      highlightColor={
        localStorage.getItem("dark-mode") === "dark" ? "#ffffff" : "#9e9e9e"
      }
    />
  );
};
export const SingleSkeleton = () => {
  return (
    <Skeleton
      count={1}
      width={170}
      height={15}
      duration={2}
      baseColor={
        localStorage.getItem("dark-mode") === "dark" ? "#bdbcbc" : "#ebebeb"
      }
      highlightColor={
        localStorage.getItem("dark-mode") === "dark" ? "#ffffff" : "#9e9e9e"
      }
    />
  );
};
