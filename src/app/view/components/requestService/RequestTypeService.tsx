import Carrosel from './requestsTypes/Carrossel'
import Post from './requestsTypes/Post'
import Story from './requestsTypes/Story'
import CampanhaAds from './requestsTypes/CampanhaAds'
import Video from './requestsTypes/Video'
import IdentidadeVisual from './requestsTypes/IdentidadeVisual'

type RequestTypeProps = {
    type: string
}

export default function RequestTypeService(RequestTypeProps: RequestTypeProps) {
    const { type } = RequestTypeProps
    return (
        <div>
            {type === 'post' && <Post />}
            {type === 'story' && <Story />}
            {type === 'carrosel' && <Carrosel />}
            {type === 'campanhaAds' && <CampanhaAds />}
            {type === 'video' && <Video />}
            {type === 'identidadeVisual' && <IdentidadeVisual/>}
        </div>
    )
}