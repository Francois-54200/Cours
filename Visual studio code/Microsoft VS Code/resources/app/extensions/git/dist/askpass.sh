#!/bin/sh
VSCODE_GIT_ASKPASS_PIPE=`mktemp`
VSCODE_GIT_ASKPASS_PIPE="$VSCODE_GIT_ASKPASS_PIPE" "$VSCODE_GIT_ASKPASS_NODE" "$VSCODE_GIT_ASKPASS_MAIN" $*
cat $VSCODE_GIT_ASKPASS_PIPE
rm $VSCODE_GIT_ASKPASS_PIPE