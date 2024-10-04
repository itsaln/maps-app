import { FC } from 'react'
import {
	GeolocationControl,
	Map,
	Placemark,
	YMaps,
	ZoomControl
} from 'react-yandex-maps'

import styles from './YMaps.module.scss'
import './_ymaps.scss'

const YMapsComponent: FC = () => {
	return (
		<div className="ymaps">
			<YMaps
				query={{
					lang: 'ru_RU'
				}}
			>
				<Map
					state={{
						center: [41.259786, 69.223929],
						zoom: 15
					}}
					// onLoad={(ymaps) => console.log('loaded:---', ymaps)}
					// onError={(error) => console.log('error:---', error)}
					className={styles.ymap}
				>
					<Placemark geometry={[41.259786, 69.223929]} />
					<ZoomControl
						options={{
							size: 'small'
						}}
					/>
					<GeolocationControl
						options={{
							float: 'right'
						}}
					/>
				</Map>
			</YMaps>
		</div>
	)
}

export default YMapsComponent
