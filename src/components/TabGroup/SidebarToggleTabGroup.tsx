import './TabGroup.css';

type TabType = 'learn' | 'api';
interface Props {
	defaultActiveTab: TabType;
	labels: Record<TabType, string>;
}

const SidebarToggleTabGroup = ({ labels }: Props) => {
	return (
		<div className="TabGroup">
			{(['learn'] as const).map((type) => (
				<button key={type} className={'active'}>
					{labels[type]}
				</button>
			))}
		</div>
	);
};

export default SidebarToggleTabGroup;
