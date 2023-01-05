import './TokensGrid.css'
import { fonts } from '@ignite-ui/tokens'
export interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue: boolean
}

export const TokensGrid: React.FC<TokensGridProps> = ({
  tokens,
  hasRemValue,
}) => {
  return (
    <table style={{ fontFamily: fonts.default }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={`${key}/${value}`}>
            <td>
              <strong>${key}</strong>
            </td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
