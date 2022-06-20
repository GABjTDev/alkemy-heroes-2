import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TableStats = ({ stats, title }) => {
  return (
    <TableContainer>
      <Table
        size="sm"
        variant="striped"
        colorScheme={title === "Heroes" ? "blue" : "red"}
      >
        <TableCaption>Stats by {title}</TableCaption>
        <Thead>
          <Tr>
            <Th>Info</Th>
            <Th>value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Intelligence</Td>
            <Td>{stats.intelligence}</Td>
          </Tr>
          <Tr>
            <Td>Combat</Td>
            <Td>{stats.combat}</Td>
          </Tr>
          <Tr>
            <Td>Durability</Td>
            <Td>{stats.durability}</Td>
          </Tr>
          <Tr>
            <Td>Power</Td>
            <Td>{stats.power}</Td>
          </Tr>
          <Tr>
            <Td>Speed</Td>
            <Td>{stats.speed}</Td>
          </Tr>
          <Tr>
            <Td>Strength</Td>
            <Td>{stats.strength}</Td>
          </Tr>
          <Tr>
            <Td>Height</Td>
            <Td>{stats.height}</Td>
          </Tr>
          <Tr>
            <Td>Weight</Td>
            <Td>{stats.weight}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableStats;
