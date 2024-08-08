import { ArtProps } from './Art'
import ArtList from './ArtList'

export default function ArtsProgress() {
    const arts = [
        { name: 'Logo', status: 'em andamento' },
        { name: 'Banner', status: 'revisao' },
        { name: 'Cartão de Visita', status: 'concluido' },
        { name: 'Flyer', status: 'em andamento' },
        { name: 'Folder', status: 'concluido' },
        { name: 'Logo', status: 'em andamento' },
        { name: 'Banner', status: 'revisao' },
        { name: 'Flyer', status: 'em andamento' },
        { name: 'Cartaz', status: 'revisao' },
    ] as ArtProps[]

    const artsEmAndamento = arts.filter(art => art.status === 'em andamento')
    const artsRevisao = arts.filter(art => art.status === 'revisao')
    const artsConcluido = arts.filter(art => art.status === 'concluido')

    return (
        <div className="flex gap-16">
            <ArtList status={'em andamento'} arts={artsEmAndamento} />
            <ArtList status={'revisao'} arts={artsRevisao} />
            <ArtList status={'concluido'} arts={artsConcluido} />
        </div>
    )
}