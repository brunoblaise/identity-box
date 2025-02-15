import { useCallback } from 'react'
import { useTheme } from '@emotion/react'
import { Text, View, FlatList } from 'react-native'
import type { DimensionValue } from 'react-native'

import { ThemeConstants } from '~/theme'

import { IdentityCell, EmptyIdentityCell } from './IdentityCell'

type ListWithHeaderProps = {
  data: ArrayLike<string> | null | undefined
  headerText: string
  onSelect: (children?: React.ReactNode) => void
  width: DimensionValue
}

const ListWithHeader = ({
  data,
  headerText,
  onSelect,
  width = '100%'
}: ListWithHeaderProps) => {
  const { colorScheme: theme } = useTheme()

  const getCellBackgroundColor = useCallback(
    (index: number, theme: 'light' | 'dark') => {
      if (index % 2) {
        return theme === 'light' ? 'white' : '#111'
      } else {
        return theme === 'light' ? '#eee' : '#222'
      }
    },
    []
  )

  const renderItem = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      if (item === 'No identities yet!') {
        return <EmptyIdentityCell>{item}</EmptyIdentityCell>
      } else {
        return (
          <IdentityCell
            onSelect={onSelect}
            textAlign='center'
            backgroundColor={getCellBackgroundColor(index, theme)}
          >
            {item}
          </IdentityCell>
        )
      }
    },
    [theme, onSelect, getCellBackgroundColor]
  )

  return (
    <>
      <View
        style={{
          marginTop: 10,
          alignSelf: 'center',
          paddingLeft: 5,
          borderLeftColor: ThemeConstants[theme].accentColor,
          borderLeftWidth: 3
        }}
      >
        <Text
          style={{
            color: theme === 'light' ? 'black' : 'white',
            fontSize: 17,
            fontWeight: 'bold'
          }}
        >
          {headerText}
        </Text>
      </View>
      <View
        style={{
          flexGrow: 1,
          flexShrink: 1,
          alignSelf: 'center',
          width,
          borderWidth: theme === 'light' ? 2 : 1,
          borderColor: ThemeConstants[theme].listBorderColor,
          borderRadius: 10,
          marginTop: 10,
          marginBottom: 10,
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <FlatList
          style={{
            backgroundColor: theme === 'light' ? 'white' : '#111'
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  )
}

export { ListWithHeader }
