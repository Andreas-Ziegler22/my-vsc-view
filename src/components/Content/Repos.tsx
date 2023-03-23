import { useFetch } from "../../hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const { data } = useFetch<Repository[]>(
    "https://api.github.com/users/Andreas-Ziegler22"
  );
  return (
    <div className="gitRepo">
      <ul>
        <li>Recent</li>
        {data?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.description}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
        <li>More..</li>
      </ul>
    </div>
  );
}
