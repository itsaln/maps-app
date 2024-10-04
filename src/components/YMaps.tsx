import { FC } from 'react'
import {
	GeolocationControl,
	Map,
	Placemark,
	YMaps,
	ZoomControl
} from 'react-yandex-maps'

import styles from './YMaps.module.scss'

const YMapsComponent: FC = () => {
	return (
		<YMaps
			query={{
				lang: 'ru_RU',
				apikey: '5e33f988-6c64-46b8-a832-b2ba09dccf23'
			}}
		>
			<Map
				state={{
					center: [41.259786, 69.223929],
					zoom: 15
				}}
				onLoad={(ymaps) => console.log('loaded:---', ymaps)}
				onError={(error) => console.log('error:---', error)}
				className={styles.map}
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
	)
}

export default YMapsComponent
