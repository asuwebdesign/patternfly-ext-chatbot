// ============================================================================
// Chatbot Main - Message - Content - Table
// ============================================================================
import React from 'react'

// Import styles
import './TableMessage.scss'
import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table'

const TableMessage = ({ table }) => {
  return (
    <div className="pf-chatbot__message-table">
      <Table aria-label={table.caption && table.caption} gridBreakPoint="grid">
        {table.caption && <Caption>{table.caption}</Caption>}
        {table.columns && (
          <Thead>
            <Tr>
              {table.columns.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
        )}
        {table.columns && table.rows && (
          <Tbody>
            {table.rows.map((row, index) => (
              <Tr key={index}>
                {row.map((cell, index) => (
                  <Td key={index} dataLabel={table.columns[index]}>{cell}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
    </div>
  )
}

export default TableMessage