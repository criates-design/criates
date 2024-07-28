import Carrosel from './requestsTypes/Carrossel'
import Post from './requestsTypes/Post'
import Story from './requestsTypes/Story'
import CampanhaAds from './requestsTypes/CampanhaAds'
import Video from './requestsTypes/Video'
import IdentidadeVisual from './requestsTypes/IdentidadeVisual'

type RequestTypeProps = {
    artType: string
}

export default function RequestTypeService(RequestTypeProps: RequestTypeProps) {
    const { artType } = RequestTypeProps
    return (
        <div>
            {artType === 'post' && <Post />}
            {artType === 'story' && <Story />}
            {artType === 'carrosel' && <Carrosel />}
            {artType === 'campanhaAds' && <CampanhaAds />}
            {artType === 'video' && <Video />}
            {artType === 'identidadeVisual' && <IdentidadeVisual/>}
        </div>
    )
}