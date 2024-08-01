import Art from './Art'

export default function ArtList() {
    return (
        <div>
            <p>em andamento</p>
            <div className="flex gap-2 flex-col">
                <Art />
                <Art />
                <Art />
                <Art />
            </div>
        </div>
    )
}