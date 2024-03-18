import { PieChart } from '@mui/x-charts/PieChart';
import { useQueryClient } from '@tanstack/react-query';
import { useState,useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Stats = () => {
  const queryClient = useQueryClient();
  const pantryItems = queryClient.getQueryData(["pantryItems"]);
  const [categoryData, setCategoryData] = useState([]);
  console.log(pantryItems)

  useEffect(() => {
  if (pantryItems) {
    const categoryCounts = pantryItems.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {}); 

    const totalCount = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);

    const categoryPercentages = Object.entries(categoryCounts).map(([category, count]) => ({
      category,
      count,
      percentage: (count / totalCount) * 100,
    }));

    setCategoryData(categoryPercentages);
  }
}, [pantryItems]);

const data = categoryData.map((category) => ({
  id: category.category,
  value: category.count,
  label: `${category.category} (${category.percentage}%)`,
}));

  return (
    <>
   <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display:'flex',
        justifyContent:'start'
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
    
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
    
    </>
  )
}

export default Stats