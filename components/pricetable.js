import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box
} from '@chakra-ui/react'

const PriceTable = () => {
  return (
    <Box px="auto" my={50} textAlign="center">
      <Table variant="simple">
        <TableCaption>
          By joining the “Competitive” category, participants will stand a
          chance to win attractive prizes and be featured on our daily
          leaderboard on Instagram. However, if that does not appeal to you and
          you simply just want a reason to break a sweat, do participate in our
          “Casual” category instead! Note that ALL participants, regardless of
          category, will receive our exclusive Run To Empower 2022 shirt!
        </TableCaption>
        <Thead>
          <Tr>
            <Th rowSpan={2}>Category</Th>
            <Th>Competitive</Th>
            <Th>Casual</Th>
          </Tr>
          <Tr>
            <Th>Individual</Th>
            <Th>Group (5pax)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Registration Fee</Td>
            <Td>$22</Td>
            <Td>$100</Td>
          </Tr>
          <Tr>
            <Td>Distance</Td>
            <Td>$22</Td>
            <Td>$100</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default PriceTable
