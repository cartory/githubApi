import './app.css';
import { useFetch } from './hooks/useFetch'

const githubApiUrl = process.env.REACT_APP_GITHUB_API_BASE_URL + '/github/commits'

export default function App() {
    const { state } = useFetch(githubApiUrl)

    const arrCommits = Object.values(state.data ?? {})
    const commits = arrCommits.length ? arrCommits[0] : []

    return (
        <div className="max-w-screen-md mx-auto bg-white p-4 rounded shadow">
            <h1 className="text-xl font-semibold mb-4">GithubCommits</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Commit Message</th>
                    </tr>
                </thead>
                <tbody>
                    {commits.map((commitData, index) => {
                        const { commit } = commitData
                        const commitDate = new Date(commit.author.date)

                        return <tr key={index} title={commit.author.name}>
                            <td className="px-6 py-4 whitespace-no-wrap">{commitDate.toLocaleString()}</td>
                            <td className="px-6 py-4 whitespace-no-wrap cursor-pointer">
                                <a href={commit.url} target='_blank' rel="noreferrer">{commit.message}</a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}