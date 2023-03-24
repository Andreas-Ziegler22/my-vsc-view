import { useFetch } from "../../hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const { data: repositories } = useFetch<Repository[]>(
    "https://api.github.com/users/Andreas-Ziegler22/repos?sort=updated&direction=desc&per_page=5"
  );
  return (
    <div className="gitRepo">
      <ul>
        <li>Recent</li>
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              {/* <p>{repo.description}</p> */}
            </li>
          );
        })}
        <li>More..</li>
      </ul>
    </div>
  );
}
