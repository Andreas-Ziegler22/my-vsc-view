import { useFetch } from "../../hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const {} = useFetch;
  return (
    <div className="gitRepo">
      <ul>
        <li>Recent</li>
        <li>Git Repository-peojects</li>
        <li>Git Repository-peojects</li>
        <li>Git Repository-peojects</li>
        <li>Git Repository-peojects</li>
        <li>Git Repository-peojects</li>
        <li>More..</li>
      </ul>
    </div>
  );
}
