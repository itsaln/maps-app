import { FC } from 'react'
import {
	GeolocationControl,
	Map,
	Placemark,
	YMaps,
	ZoomControl,
	RouteButton
} from 'react-yandex-maps'

interface IYMapsComponent {
	className?: string
}

const YMapsComponent: FC<IYMapsComponent> = ({ className }) => {
	return (
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
				className={className}
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
				<RouteButton
					options={{
						float: 'right'
					}}
				/>
			</Map>
		</YMaps>
	)
}

export default YMapsComponent
