import ArtList from './ArtList'

export default function ArtsProgress() {
    return (
        <div className="flex gap-2">
            <ArtList />
            <ArtList />
            <ArtList />
        </div>
    )
}