import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/react-hooks';
import { useAuthFlowQuery } from './useAuthFlowQuery';

jest.mock('@apollo/react-hooks', () => ({
  useQuery: jest.fn(),
}));

describe(useAuthFlowQuery, () => {
  test('it returns only 1 auth flow item', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      data: {
        blockAuthenticationFlowCollection: {
          items: [{ internalName: 'item 1' }, { internalName: 'item 2' }],
        },
      },
    });

    const {
      result: {
        current: { authenticationFlow },
      },
    } = renderHook(() =>
      useAuthFlowQuery({
        codeId: 'test',
      })
    );

    expect(Array.isArray(authenticationFlow)).toBe(false);
    expect(authenticationFlow?.internalName).toBe('item 1');
  });

  test('it returns an error when there is no auth flow in result', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      data: {
        blockAuthenticationFlowCollection: {
          items: [],
        },
      },
    });

    const {
      result: {
        current: { authenticationFlow, error },
      },
    } = renderHook(() =>
      useAuthFlowQuery({
        codeId: 'test',
      })
    );

    expect(authenticationFlow).toStrictEqual(null);
    expect(error).toBeDefined();
  });
});
