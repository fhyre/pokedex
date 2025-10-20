import styles from './pokemon-filter-modal.module.scss';
import { Dialog } from '@/features/ui/dialog';
import { X } from 'lucide-react';
import { useCallback, useReducer } from 'react';
import { Filters } from '../types';
import { GenerationTags } from './components/generation-tags';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { EFilterAction, EPokeTypes } from '../enums';
import { TypeTags } from './components/type-tags';
import { useSnackbar } from 'notistack';

export function PokemonFilterModal({
  setModalVisible,
}: PokemonFilterModalProps) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const params = useSearchParams();
  const [state, dispatch] = useReducer(filterReducer, {
    generations: params.get('generations')
      ? JSON.parse(params.get('generations')!)
      : [],
    types: params.get('types') ? JSON.parse(params.get('types')!) : [],
  } as Filters);

  const buildSearchParams = useCallback(() => {
    const searchParamBuilder: string[] = [];

    if (state.generations.length > 0)
      searchParamBuilder.push(
        `generations=${JSON.stringify(state.generations.sort())}`
      );
    if (state.types.length > 0)
      searchParamBuilder.push(`types=${JSON.stringify(state.types)}`);

    if (searchParamBuilder.length === 0) return '';

    return `?${searchParamBuilder.join('&')}`;
  }, [state]);

  const handleApply = () => {
    const searchParams = buildSearchParams();
    if (`/${searchParams}` === decodeURIComponent(router.asPath)) {
      enqueueSnackbar('Filters have not been modified', {
        variant: 'info',
        style: { fontFamily: 'sans-serif' },
        autoHideDuration: 2000,
      });
      return;
    }
    router.push(searchParams);
    router.push(buildSearchParams());
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
          <X onClick={() => setModalVisible(false)} />
        </div>
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <GenerationTags
              setGeneration={(gen) =>
                dispatch({ type: EFilterAction.SET_GENERATION, payload: gen })
              }
              currSelectedGenerations={state.generations}
            />
            <TypeTags
              setType={(type) =>
                dispatch({ type: EFilterAction.SET_TYPE, payload: type })
              }
              currSelectedTypes={state.types}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button
            onClick={() => dispatch({ type: EFilterAction.CLEAR_FILTERS })}
          >
            Clear Filters
          </button>
          <button onClick={handleApply}>Apply</button>
        </div>
      </section>
    </Dialog>
  );
}

function filterReducer(state: Filters, action: FilterAction) {
  switch (action.type) {
    case EFilterAction.SET_GENERATION:
      const newGenerations = new Set(state.generations);
      if (newGenerations.has(action.payload)) {
        newGenerations.delete(action.payload);
      } else {
        newGenerations.add(action.payload);
      }
      return { ...state, generations: Array.from(newGenerations) };
    case EFilterAction.SET_TYPE:
      const newTypes = new Set(state.types);
      if (newTypes.has(action.payload)) {
        newTypes.delete(action.payload);
      } else {
        newTypes.add(action.payload);
      }
      return { ...state, types: Array.from(newTypes) };
    case EFilterAction.CLEAR_FILTERS:
      return { ...state, generations: [], types: [] };
    default:
      return state;
  }
}

type PokemonFilterModalProps = {
  setModalVisible: (a: boolean) => void;
};

type FilterAction =
  | {
      type: EFilterAction.SET_GENERATION;
      payload: number;
    }
  | {
      type: EFilterAction.CLEAR_FILTERS;
    }
  | {
      type: EFilterAction.SET_TYPE;
      payload: EPokeTypes;
    };
