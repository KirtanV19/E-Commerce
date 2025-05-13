import Container from '../utils/Container'
import { Images } from '../utils/Images'

const Advertisement = () => {
    return (
        <div>
            <Container maxWidth='md' className='mt-24' >
                <img src={Images.AdvertisementImg} className='bg-cover bg-center bg-no-repeat' />
            </Container>
        </div>
    )
}

export default Advertisement