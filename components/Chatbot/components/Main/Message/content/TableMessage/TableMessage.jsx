// ============================================================================
// Chatbot Main - Message - Content - Table
// ============================================================================
import React from 'react'

// Import styles
import './TableMessage.scss'
import { Table, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table'

const TableMessage = ({ caption, columns, rows }) => {
  return (
    <div className="pf-chatbot__message-table">
      <Table aria-label={caption && caption} gridBreakPoint="grid">
        {caption && <Caption>{caption}</Caption>}
        {columns && (
          <Thead>
            <Tr>
              {columns.map((column, index) => (
                <Th key={index}>{column}</Th>
              ))}
            </Tr>
          </Thead>
        )}
        {columns && rows && (
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                {row.map((cell, index) => (
                  <Td key={index} dataLabel={columns[index]}>{cell}</Td>
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