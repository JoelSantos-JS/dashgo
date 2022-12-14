import { Flex, SimpleGrid , Box , Text, theme} from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



const options: ApexOptions = {
  chart: {
      toolbar: { show: false },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
      type: 'datetime',
      axisBorder: { color: theme.colors.gray[600] },
      axisTicks: { color: theme.colors.gray[600] },
      categories: [
          '2022-08-26T00:00:00.000Z',
          '2022-08-27T00:00:00.000Z',
          '2022-08-28T00:00:00.000Z',
          '2022-08-29T00:00:00.000Z',
          '2022-08-30T00:00:00.000Z',
          '2022-08-31T00:00:00.000Z',
          '2022-09-01T00:00:00.000Z',
      ]
  },
  fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'dark',
          opacityFrom: 0.7,
          opacityTo: 0.3,
      }
  }
};
const series  = [
  {name: 'Series' , data: [31,120,10,28,61,18,109]}
]

function dashboard() {
  return (
    <Flex direction='column' h='100vh'>
<Header/>

    <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
      <SideBar/>


      <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
      <Box bg='gray.800' borderRadius={8} p={['6' , '8']}>
   <Text fontSize='lg' mb='4'>
   Inscritos da semana
   </Text>
   
   <Chart options={options} series={series} type='area' height={160}/>

      </Box>
      <Box p={['6' , '8']} bg='gray.800' borderRadius={8}>
   <Text fontSize='lg' mb='4'>
  Taxa de Abertura
   </Text>
   <Chart options={options} series={series} type='area' height={160}/>
      </Box>

      </SimpleGrid>
    </Flex>
    </Flex>
    
  )
}

export default dashboard