#PBS -S /bin/bash
#PBS -lnodes=1:cores16
#PBS -lwalltime=12:00:00

# Requires
REQS="--require . --require webppl-fs --require webppl-timeit"
export REQS

# Run in parallel
parallel --env REQS webppl lisa-experiment.wppl "n=2 b={1} alpha={2} eps={3} $REQS" ::: {1..2} ::: 0.1 0.05 ::: 0.001 0.05