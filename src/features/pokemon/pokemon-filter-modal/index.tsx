import styles from './pokemon-filter-modal.module.scss';
import { SearchBar } from '@/features/ui';
import { Dialog } from '@/features/ui/dialog';
import { Icon } from '@iconify/react';
import { useReducer } from 'react';
import { IFilters } from '../types';
import { GenerationTags } from './components/generation-tags';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export function PokemonFilterModal({
  setModalVisible,
}: IPokemonFilterModalProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [state, dispatch] = useReducer(filterReducer, {
    generations: params.get('generations')
      ? JSON.parse(params.get('generations'))
      : [],
    query: params.get('query') || '',
  } as IFilters);

  const handleApply = () => {
    const searchParams = buildSearchParams(state);
    if (`/${searchParams}` === router.asPath) return;
    router.push(searchParams);
    router.push(buildSearchParams(state));
    sessionStorage.setItem('scrollPos', '0');
    setModalVisible(false);
  };

  return (
    <Dialog setModalVisible={setModalVisible}>
      <section
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2>Filter</h2>
          <Icon icon="ep:close" onClick={() => setModalVisible(false)} />
        </div>
        <div className={styles.content}>
          <SearchBar
            currentValue={state.query}
            cb={(val) => dispatch({ type: 'setSearchQuery', payload: val })}
          />
          <div className={styles.innerContent}>
            <GenerationTags
              setGeneration={(gen) =>
                dispatch({ type: 'setGenerations', payload: gen })
              }
              currSelectedGenerations={state.generations}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={() => dispatch({ type: 'clearFilters' })}>
            Clear Filters
          </button>
          <button onClick={handleApply}>Apply</button>
        </div>
      </section>
    </Dialog>
  );
}

function filterReducer(state: IFilters, action: FilterAction) {
  switch (action.type) {
    case 'setSearchQuery':
      return { ...state, query: action.payload };
    case 'setGenerations':
      const newGenerations = new Set(state.generations);
      if (newGenerations.has(action.payload)) {
        newGenerations.delete(action.payload);
      } else {
        newGenerations.add(action.payload);
      }
      return { ...state, generations: Array.from(newGenerations) };
    case 'clearFilters':
      return { ...state, generations: [], query: '' };
    default:
      return state;
  }
}

const buildSearchParams = (state: IFilters) => {
  const searchParamBuilder = [];

  if (state.query) searchParamBuilder.push(`query=${state.query}`);
  if (state.generations.length > 0)
    searchParamBuilder.push(
      `generations=${JSON.stringify(state.generations.sort())}`
    );

  if (searchParamBuilder.length === 0) return '';

  return `?${searchParamBuilder.join('&')}`;
};

interface IPokemonFilterModalProps {
  setModalVisible: (a: boolean) => void;
}

type FilterAction =
  | {
      type: 'setSearchQuery';
      payload: string;
    }
  | {
      type: 'setGenerations';
      payload: number;
    }
  | {
      type: 'clearFilters';
    };
