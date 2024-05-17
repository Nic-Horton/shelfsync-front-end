import { PieChart } from '@mui/x-charts/PieChart';
import { useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Stats = () => {
	const theme = useTheme();
	const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
	const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
	const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
	const queryClient = useQueryClient();
	const pantryItems = queryClient.getQueryData('pantryItems');
	const [categoryData, setCategoryData] = useState([]);
	console.log(pantryItems);

	useEffect(() => {
		if (pantryItems) {
			const categoryCounts = pantryItems.reduce((acc, item) => {
				acc[item.category] = (acc[item.category] || 0) + 1;
				return acc;
			}, {});

			const totalCount = Object.values(categoryCounts).reduce(
				(sum, count) => sum + count,
				0
			);

			const categoryPercentages = Object.entries(categoryCounts).map(
				([category, count]) => ({
					category,
					count,
					percentage: (count / totalCount) * 100,
				})
			);

			setCategoryData(categoryPercentages);
		}
	}, [pantryItems]);

	const data = categoryData.map((category) => ({
		id: category.category,
		value: category.count,
		label: `${category.category} (${category.percentage.toFixed(1)}%)`,
	}));

	const COLORS = [
		'#0088FE',
		'#00C49F',
		'#FFBB28',
		'#FF8042',
		'#AF19FF',
		'#FF3333',
		'#66FF66',
		'#1aa066',
		'#FFB2B2',
		'#E808E6',
		'#999966',
		'#FFF999',
		'#97338F',
	];

	return (
		<>
			<Toolbar
				sx={{
					pl: { sm: 2 },
					pr: { xs: 1, sm: 1 },
					display: 'flex',
					justifyContent: 'start',
				}}
			>
				<Typography
					sx={{ flex: '1 1 100%' }}
					variant="h6"
					id="StatTitle"
					component="div"
				>
					Statistics
				</Typography>
			</Toolbar>
			{pantryItems && pantryItems.length === 0 ? (
				<Typography variant="h5" align="center">
					No items currently available for stats
				</Typography>
			) : (
				<PieChart
					colors={COLORS}
					series={[
						{
							data,
							innerRadius: 10,
							paddingAngle: 1,
							highlightScope: { faded: 'global', highlighted: 'item' },
							faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
						},
					]}
					margin={{ right: 250 }}
					slotProps={{
						legend: {
							direction: 'column',
							position: { vertical: 'middle', horizontal: 'right' },
							itemMarkWidth: 20,
							itemMarkHeight: 2,
						},
					}}
					height={400}
					width={isSmScreen ? 500 : isMdScreen ? 600 : isLgScreen ? 800 : 1000}
				/>
			)}
		</>
	);
};

export default Stats;
